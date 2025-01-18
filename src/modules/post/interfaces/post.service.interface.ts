import { SimpleDictionaryDto } from './posts.interface';

export interface IPostService {
  getCuttingById(id: number): Promise<SimpleDictionaryDto>;
  getSortById(id: number): Promise<SimpleDictionaryDto>;
  getCatchAreaById(id: number): Promise<SimpleDictionaryDto>;
  getTypeOfProcessingById(id: number): Promise<SimpleDictionaryDto>;
}
