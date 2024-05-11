import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AppController,
  BookController,
  AuthorController,
  GenreController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { BookUseCasesModule } from './use-cases/book/book-use-cases.module';
import { AuthorUseCasesModule } from './use-cases/author/author-use-cases.module';
import { GenreUseCasesModule } from './use-cases/genre/genre-use-cases.module';
import { CrmServicesModule } from './services/crm-services/crm-services.module';
import { DATA_BASE_CONFIGURATION } from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    DataServicesModule,
    BookUseCasesModule,
    AuthorUseCasesModule,
    GenreUseCasesModule,
    CrmServicesModule
  ],
  controllers: [
    AppController,
    BookController,
    AuthorController,
    GenreController,
  ],
  providers: [],
})
export class AppModule { }
