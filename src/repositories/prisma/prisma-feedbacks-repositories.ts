
import { prisma } from "../../prisma"
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository"

export class PrismaFeedbacksRepositories implements FeedbacksRepository {
  async create(data: FeedbackCreateData): Promise<void> {
    const { type, comment, screenshot } = data

    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}