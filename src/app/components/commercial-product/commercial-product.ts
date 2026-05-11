import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-commercial-product',
  imports: [NgFor],
  templateUrl: './commercial-product.html',
  styleUrl: './commercial-product.scss',
})
export class CommercialProductComponent {
  listItems = [
    'Базовая версия OpenIDE остаётся бесплатной и с открытым исходным кодом',
    'Маркетплейс и плагины продолжают развиваться открыто',
    'Бесплатный доступ к Pro-версии предусмотрен для образовательных программ, open source-контрибьюторов и авторам контента на медиа-площадках',
  ];
}
