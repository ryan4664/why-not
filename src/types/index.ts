import { PrismaClient } from "@prisma/client";
import { DataSource } from "apollo-datasource";

export class Store extends DataSource {
  prisma: PrismaClient;

  context: Object;

  cache: Object;

  constructor(db: PrismaClient) {
    super();
    this.prisma = db;
  }

  initialize(config) {
    this.context = config.context;
    this.cache = config.cache;
  }
}

export interface IResolverArgs {
  parent: any;
  args: any;
  context: {
    dataSources: {
      store: Store
    }
  };
  info: any;
}
