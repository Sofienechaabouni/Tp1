import { Module } from '@nestjs/common';
import { Controleur1Controller } from 'src/controleur1/controleur1.controller';

@Module({
    controllers:[Controleur1Controller]
})
export class PremierModule {}
