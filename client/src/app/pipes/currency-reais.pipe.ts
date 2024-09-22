import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currencyReais",
  standalone: true,
})
export class CurrencyReaisPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) return "R$ 0,00";
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
