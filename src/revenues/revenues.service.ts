import { Injectable } from '@nestjs/common';

@Injectable()
export class RevenuesService {
    private revenues = [
        { id: 1, title: 'Salaire', amount: 150000 },
        { id: 2, title: 'Business', amount: 50000 }
    ];

   
    findAll() {
        return this.revenues;
    }

    // 📌 Ajouter un revenu
    create(revenue: { title: string; amount: number }) {
        const newRevenue = { id: Date.now(), ...revenue };
        this.revenues.push(newRevenue);
        return newRevenue;
    }

   
    delete(id: number) {
        this.revenues = this.revenues.filter(rev => rev.id !== id);
        return { message: `Revenu avec l'ID ${id} supprimé` };
    }
}
