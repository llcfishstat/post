import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';

import { SimpleDictionaryDto } from '../interfaces/posts.interface';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getCuttingById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.cutting.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Cutting with ID=${id} not found`);
    }
    return { id: record.id, name: record.name };
  }

  async getSortById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.sort.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Sort with ID=${id} not found`);
    }
    return { id: record.id, name: record.name };
  }

  async getCatchAreaById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.catchArea.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`CatchArea with ID=${id} not found`);
    }
    return { id: record.id, name: record.name };
  }

  async getTypeOfProcessingById(id: number): Promise<SimpleDictionaryDto> {
    const record = await this.prisma.typeOfProcessing.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`TypeOfProcessing with ID=${id} not found`);
    }
    return { id: record.id, name: record.name };
  }

  async searchCuttingByTerm(term: string): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.cutting.findMany({
      where: {
        name: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.name }));
  }

  async searchSortByTerm(term: string): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.cutting.findMany({
      where: {
        name: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.name }));
  }

  async searchCatchAreaByTerm(term: string): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.cutting.findMany({
      where: {
        name: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.name }));
  }

  async searchTypeOfProcessingByTerm(
    term: string,
  ): Promise<SimpleDictionaryDto[]> {
    if (!term?.trim()) {
      return [];
    }

    const records = await this.prisma.cutting.findMany({
      where: {
        name: {
          contains: term,
          mode: 'insensitive',
        },
      },
    });
    return records.map((r) => ({ id: r.id, name: r.name }));
  }
}
