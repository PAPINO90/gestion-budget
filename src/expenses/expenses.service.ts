import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {
    private expenses = [
        { id: 1, title: 'Nourriture', amount: 15000 },
        { id: 2, title: 'Transport', amount: 5000 }
    ];

    
    findAll() {
        return this.expenses;
    }

  
    create(expense: { title: string; amount: number }) {
        const newExpense = { id: Date.now(), ...expense };
        this.expenses.push(newExpense);
        return newExpense;
    }

   
    delete(id: number) {
        this.expenses = this.expenses.filter(exp => exp.id !== id);
        return { message: `Dépense avec l'ID ${id} supprimée` };
    }
}
