import { Component } from '@angular/core';
import { PassandoDadosService } from '../servicos/passando-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public listaNoticias = [
    { titulo: 'Gabarito da prova do Vestibulinho das Etecs já está na internet', data: '16/06/2019', link: "/noticia-trote", img: 'https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/06/foto_gabarito_gastao-1200x800.jpg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Campanha do Agasalho', data: '15/06/2019', link: "/noticia-trote", img: 'http://conteudo.pucrs.br/wp-content/uploads/2017/05/2017_05_15-arte_completa_campanha_agasalho_2017l907x550.png', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Inscrições para o Novotec Expresso terminam domingo', data: '14/06/2019', link: "/noticia-trote", img: 'https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/05/informatica-gastao-guedes.jpg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Etecs superam Finlândia, Japão e Canadá no Pisa para Escolas', data: '13/06/2019', link: "/noticia-trote", img: 'https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/06/pisa-fabio.jpg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Professores do CPS dão dicas para o Vestibulinho e Vestibular', data: '14/06/2019', link: "/noticia-trote", img: 'https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/06/prova_2-1200x800.png', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Vestibulinho Etec', data: '16/05/2019', link: "/noticia-trote", img: 'https://fatweb.s3.amazonaws.com/vestibulinhoetec/img/layout/2sem19/og-image.jpg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Etec Portas Abertas', data: '12/05/2019', link: "/noticia-trote", img: 'http://www.etecbarrabonita.com.br/wp-content/uploads/2018/11/EtecPortasAbertas.jpg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Campanha de doação de Sangue', data: '27/04/2019', link: "/noticia-trote", img: 'http://vidasadia.com.br/wp-content/uploads/2018/06/doencas-que-impedem-a-doacao-de-sangue-tua-saude.jpeg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.' },
    { titulo: 'Trote Solidário', data: '21/03/2019', link: "/noticia-trote", img: 'https://unp.br/wp-content/uploads/2018/08/selo-trote-solid%C3%A1rio.jpeg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},
    { titulo: 'Show da Etec', data: '27/02/2019', link: "/noticia-trote", img: 'assets/trote.jpg', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tellus mi. Cras porttitor nisi augue, non feugiat risus tristique non. Curabitur vitae interdum leo. Vestibulum luctus, ante et aliquet volutpat, lectus tortor egestas nunc, eget tempus ipsum lectus hendrerit est. In ut efficitur urna. Duis et erat eu nibh posuere aliquam. Cras tempor lacus sed nibh semper cursus. Mauris maximus, sapien quis aliquam vehicula, neque neque laoreet ipsum, sed scelerisque ligula metus et dolor. Praesent aliquam lorem a nulla sodales congue. Integer ex odio, euismod vitae lacus et, pellentesque bibendum mi.'},  
    
  ];

  constructor(private rota: Router, private enviaDados: PassandoDadosService) {

  }


  public mostraNoticia(noticia) {
    console.log(noticia);
    this.enviaDados.setDados('noticia', noticia);
    this.rota.navigate(['/noticia-trote']);
  }


  ngOnInit() {
  }

}

