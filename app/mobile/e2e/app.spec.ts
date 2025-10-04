describe('App Launch', () => {
  it('should load the home screen placeholder', async () => {
    await expect(element(by.text('DinkyK2'))).toBeVisible();
  });
});
