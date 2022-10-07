import { Test, TestingModule } from '@nestjs/testing';
import { Controleur1Controller } from './controleur1.controller';

describe('Controleur1Controller', () => {
  let controller: Controleur1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controleur1Controller],
    }).compile();

    controller = module.get<Controleur1Controller>(Controleur1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
