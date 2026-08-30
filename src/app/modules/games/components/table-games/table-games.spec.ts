import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableGames } from './table-games';

describe('TableGames', () => {
  let component: TableGames;
  let fixture: ComponentFixture<TableGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGames]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TableGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería retornar el badge correcto para un género conocido', () => {
    expect(component.getGenreBadge('Shooter')).toBe('danger');
    expect(component.getGenreBadge('MMORPG')).toBe('primary');
  });

  it('debería retornar "secondary" como fallback para un género desconocido', () => {
    expect(component.getGenreBadge('GéneroInventado')).toBe('secondary');
  });
});