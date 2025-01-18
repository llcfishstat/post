import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';

import { SimpleDictionaryDto } from '../interfaces/posts.interface';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getCuttingById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.cuttings.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Cutting with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getSortById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.sorts.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Sort with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getCatchAreaById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.catchAreas.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`CatchArea with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getTypeOfProcessingById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.typesOfProcessing.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`TypeOfProcessing with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async searchCuttingByTerm(term: string): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.cuttings.findMany({
      where: {
        title: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchSortByTerm(term: string): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.sorts.findMany({
      where: {
        title: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchCatchAreaByTerm(term: string): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.catchAreas.findMany({
      where: {
        title: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchTypeOfProcessingByTerm(
    term: string,
  ): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.typesOfProcessing.findMany({
      where: {
        title: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }
}
