import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { RevenuesModule } from './revenues/revenues.module';

@Module({
  imports: [ExpensesModule, RevenuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
