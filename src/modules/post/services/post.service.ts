import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';

import { DictionaryDto } from '../interfaces/posts.interface';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getCuttingById(id: number): Promise<DictionaryDto> {
    const record = await this.prisma.cuttings.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Cutting with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getSortById(id: number): Promise<DictionaryDto> {
    const record = await this.prisma.sorts.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Sort with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getProductById(id: number): Promise<DictionaryDto> {
    const record = await this.prisma.products.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Product with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getSizeById(id: number): Promise<DictionaryDto> {
    const record = await this.prisma.sizes.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Size with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getCatchAreaById(id: number): Promise<DictionaryDto> {
    const record = await this.prisma.catchAreas.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`CatchArea with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async getTypeOfProcessingById(id: number): Promise<DictionaryDto> {
    const record = await this.prisma.typesOfProcessing.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`TypeOfProcessing with ID=${id} not found`);
    }
    return { id: record.id, name: record.title };
  }

  async searchCuttingByTerm(term: string): Promise<DictionaryDto[]> {
    const records = await this.prisma.cuttings.findMany({
      where: term?.trim()
        ? {
            title: {
              contains: term,
              mode: 'insensitive',
            },
          }
        : {},
      take: 3,
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchSortByTerm(term: string): Promise<DictionaryDto[]> {
    const records = await this.prisma.sorts.findMany({
      where: term?.trim()
        ? {
            title: {
              contains: term,
              mode: 'insensitive',
            },
          }
        : {},
      take: 3,
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchCatchAreaByTerm(term: string): Promise<DictionaryDto[]> {
    const records = await this.prisma.catchAreas.findMany({
      where: term?.trim()
        ? {
            title: {
              contains: term,
              mode: 'insensitive',
            },
          }
        : {},
      take: 3,
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchTypeOfProcessingByTerm(term: string): Promise<DictionaryDto[]> {
    const records = await this.prisma.typesOfProcessing.findMany({
      where: term?.trim()
        ? {
            title: {
              contains: term,
              mode: 'insensitive',
            },
          }
        : {},
      take: 3,
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchProductByTerm(term: string): Promise<DictionaryDto[]> {
    const records = await this.prisma.products.findMany({
      where: term?.trim()
        ? {
            title: {
              contains: term,
              mode: 'insensitive',
            },
          }
        : {},
      take: 3,
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }

  async searchSizeByTerm(term: string): Promise<DictionaryDto[]> {
    const records = await this.prisma.sizes.findMany({
      where: term?.trim()
        ? {
            title: {
              contains: term,
              mode: 'insensitive',
            },
          }
        : {},
      take: 3,
    });
    return records.map((r) => ({ id: r.id, name: r.title }));
  }
}
