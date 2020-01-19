/*
 * @Author: Admin
 * @Date: 2020-01-19 19:32:09
 * @FilePath: \Angular7Study\eg12\user-management\src\app\in-memory-data.service.ts
 * @Description: file content
 */
import { InMemoryDbService } from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, isSecret: false, name: "Way Lau" },
      { id: 12, isSecret: false, name: "Narco" },
      { id: 13, isSecret: false, name: "Bombasto" },
      { id: 14, isSecret: false, name: "Celeritas" },
      { id: 15, isSecret: false, name: "Magneta" },
      { id: 16, isSecret: false, name: "RubberMan" },
      { id: 17, isSecret: false, name: "Dynama" },
      { id: 18, isSecret: true, name: "Dr IQ" },
      { id: 19, isSecret: true, name: "Magma" },
      { id: 20, isSecret: true, name: "Tornado" }
    ];
    return { users };
  }
}
