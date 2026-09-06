import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent, IconComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el título del taller', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).toContain('Taller de Modularidad');
  });

  it('debería renderizar una tarjeta por cada módulo del taller', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(3);
  });

  it('debería tener enlaces a todos los módulos del taller', () => {
    const links = fixture.debugElement.queryAll(By.css('a[routerLink]'));
    const urls = links.map(link => link.nativeElement.getAttribute('routerLink'));

    expect(urls).toContain('/games');
    expect(urls).toContain('/courses');
    expect(urls).toContain('/movies');
  });
});