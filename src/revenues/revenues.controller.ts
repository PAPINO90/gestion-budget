import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { RevenuesService } from './revenues.service';

@Controller('revenues')
export class RevenuesController {
    constructor(private readonly revenuesService: RevenuesService) {}

    @Get()
    getAllRevenues() {
        return this.revenuesService.findAll();
    }

   
    @Post()
    addRevenue(@Body() revenue: { title: string; amount: number }) {
        return this.revenuesService.create(revenue);
    }

    @Delete(':id')
    deleteRevenue(@Param('id') id: number) {
        return this.revenuesService.delete(id);
    }
}
