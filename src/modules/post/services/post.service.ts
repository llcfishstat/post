import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';

import { DictionaryDto } from '../interfaces/posts.interface';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByIds(data: {
    cuttingTypeId?: number;
    sortId?: number;
    catchAreaId?: number;
    processingTypeId?: number;
    sizeId?: number;
    productId?: number;
    additionalServices?: number[];
  }): Promise<{
    cutting?: DictionaryDto;
    sort?: DictionaryDto;
    catchArea?: DictionaryDto;
    processingType?: DictionaryDto;
    size?: DictionaryDto;
    product?: DictionaryDto;
    additionalServices?: DictionaryDto[];
  }> {
    const result: {
      cutting?: DictionaryDto;
      sort?: DictionaryDto;
      catchArea?: DictionaryDto;
      processingType?: DictionaryDto;
      size?: DictionaryDto;
      product?: DictionaryDto;
      additionalServices?: DictionaryDto[];
    } = {};

    if (data.cuttingTypeId) {
      result.cutting = await this.getCuttingById(data.cuttingTypeId);
    }
    if (data.sortId) {
      result.sort = await this.getSortById(data.sortId);
    }
    if (data.catchAreaId) {
      result.catchArea = await this.getCatchAreaById(data.catchAreaId);
    }

    if (data.processingTypeId) {
      result.processingType = await this.getTypeOfProcessingById(
        data.processingTypeId,
      );
    }

    if (data.sizeId) {
      result.size = await this.getSizeById(data.sizeId);
    }

    if (data.productId) {
      result.product = await this.getProductById(data.productId);
    }

    if (data.additionalServices) {
      result.additionalServices = await this.getAdditionalServicesByIds(
        data.additionalServices,
      );
    }

    return result;
  }

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

  async getAdditionalServicesByIds(ids: number[]): Promise<DictionaryDto[]> {
    const record = await this.prisma.additionalServices.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return record.map((item) => ({ id: item.id, name: item.title }));
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
