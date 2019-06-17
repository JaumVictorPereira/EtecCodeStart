import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassandoDadosService } from '../servicos/passando-dados.service';

@Component({
  selector: 'app-noticia-trote',
  templateUrl: './noticia-trote.page.html',
  styleUrls: ['./noticia-trote.page.scss'],
})
export class NoticiaTrotePage implements OnInit {

  public noticia = {}

  constructor(private rota: ActivatedRoute, private enviaDados: PassandoDadosService) { }

  ngOnInit() {
    this.noticia = this.enviaDados.getDados('noticia');
    console.log(this.noticia);
  }

}
