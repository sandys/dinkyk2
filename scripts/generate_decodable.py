#!/usr/bin/env python3
"""Stub for decodable story generation.

Implements Phase 5 workflow outlined in IMPLEMENTATION_PLAN.md.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate decodable story drafts")
    parser.add_argument("--lesson", type=int, required=True, help="Lesson number to target")
    parser.add_argument("--dry-run", action="store_true", help="Preview prompt without writing output")
    return parser.parse_args()


def load_lesson_metadata(lesson: int) -> dict:
    metadata_path = Path("curriculum") / f"phase_{lesson:02d}" / f"lesson_{lesson:02d}" / "metadata.json"
    if not metadata_path.exists():
        raise FileNotFoundError(f"Missing metadata for lesson {lesson}: {metadata_path}")
    return json.loads(metadata_path.read_text())


def main() -> None:
    args = parse_args()
    try:
        metadata = load_lesson_metadata(args.lesson)
    except FileNotFoundError as exc:
        print(exc)
        return

    prompt_preview = {
        "lesson": args.lesson,
        "target_phonics": metadata.get("target_phonics"),
        "word_bank": metadata.get("word_bank", [])[:10]
    }

    if args.dry_run:
        print(json.dumps(prompt_preview, indent=2))
        return

    drafts_dir = Path("content/decodables/drafts")
    drafts_dir.mkdir(parents=True, exist_ok=True)
    output_path = drafts_dir / f"lesson_{args.lesson:02d}_draft.json"
    output_path.write_text(json.dumps(prompt_preview, indent=2))
    print(f"Draft written to {output_path}")


if __name__ == "__main__":
    main()
