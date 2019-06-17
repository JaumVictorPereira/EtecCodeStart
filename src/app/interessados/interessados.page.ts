import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassandoDadosService } from '../servicos.service';

@Component({
  selector: 'app-interessados',
  templateUrl: './interessados.page.html',
  styleUrls: ['./interessados.page.scss'],
})
export class InteressadosPage implements OnInit {


  public listaInteressados = [
    { titulo: 'Calendario Escolar', data: '16/06/2019', link: "/estagio", img: 'https://i0.wp.com/www.marituba.pa.gov.br/site/wp-content/uploads/2016/11/calendario.jpg', noticia:'De 28/03 até as 15h do dia 09/04/2019 Inscrições para redução A partir de 30/04/2019 Divulgação do resultado da solicitação de redução'},
    { titulo: 'Duvidas Frequentes', data: '13/06/2019', link: "/estagio", img: 'http://www.innoscience.com.br/wp-content/uploads/2017/04/duvidas-inova%C3%A7%C3%A3o1.png', noticia:'sem conteudo disponivel'},
    { titulo: 'Fale Conosco', data: '15/06/2019', link: "/estagio", img: 'http://www.nparcondicionado.com.br/wp-content/uploads/2014/09/fale-conosco-1280x600.jpg', noticia:'Capital e Grande São Paulo: (11) 3471-4071 Demais localidades: 0800 772 2829 Atendimento de ligações (humano): dias úteis, das 8h às 20h Atendimento URA (eletrônico): todos os dias, 24h'}

  ];

  constructor(private rota: Router, private enviaDados: PassandoDadosService) {
  }

  public mostraNoticia(noticia) {
    console.log(noticia);
    this.enviaDados.setDados('noticia', noticia);
    this.rota.navigate(['/estagio']);
  }





  ngOnInit() {
  }

}
