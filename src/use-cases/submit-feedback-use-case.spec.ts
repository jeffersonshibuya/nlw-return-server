import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedack = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedack.execute({
      type: 'BUG',
      comment: 'exmple comment',
      screenshot: 'data:image/png;base64,987a89sd7897a9sd87'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  });

  it('should throw an error if type is not informed', async () => {
    await expect(submitFeedack.execute({
      type: '',
      comment: 'exmple comment',
      screenshot: 'data:image/png:base64,987a89sd7897a9sd87'
    })).rejects.toThrow();
  });

  it('should throw an error if comment is not informed', async () => {
    await expect(submitFeedack.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png:base64,987a89sd7897a9sd87'
    })).rejects.toThrow();
  });

  it('should throw an error if screenshot is not a valid format', async () => {
    await expect(submitFeedack.execute({
      type: 'BUG',
      comment: 'exmple comment',
      screenshot: 'image.png'
    })).rejects.toThrow();
  });

});