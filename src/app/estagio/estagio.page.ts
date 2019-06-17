import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassandoDadosService } from '../servicos.service';

@Component({
  selector: 'app-estagio',
  templateUrl: './estagio.page.html',
  styleUrls: ['./estagio.page.scss'],
})
export class EstagioPage implements OnInit {

  public noticia = {}

  constructor(private rota: ActivatedRoute, private enviaDados: PassandoDadosService) { }

  ngOnInit() {
    this.noticia = this.enviaDados.getDados('noticia');
    console.log(this.noticia);
  }

}
