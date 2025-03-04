import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) {}

    
    @Get()
    getAllExpenses() {
        return this.expensesService.findAll();
    }

    @Post()
    addExpense(@Body() expense: { title: string; amount: number }) {
        return this.expensesService.create(expense);
    }

   
    @Delete(':id')
    deleteExpense(@Param('id') id: number) {
        return this.expensesService.delete(id);
    }
}
