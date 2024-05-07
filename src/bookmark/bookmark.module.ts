import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { MulterModule } from '@nestjs/platform-express';
// import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MulterModule.register(
    ),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'uploads'), // Serve uploaded files from this directory
    //   serveRoot: '/uploads', // Expose the uploaded files at this route
    // }),
  ],
  providers: [BookmarkService],
  controllers: [BookmarkController]
})
export class BookmarkModule {}
