import './style.css';
import { accionNumero, accionOperador, accionResultado, listaHistorial } from './calculadora';

document.getElementById('uno')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#uno')!) );
document.getElementById('dos')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#dos')!) );
document.getElementById('tres')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#tres')!) );
document.getElementById('cuatro')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#cuatro')!) );
document.getElementById('cinco')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#cinco')!) );
document.getElementById('seis')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#seis')!) );
document.getElementById('siete')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#siete')!) );
document.getElementById('ocho')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#ocho')!) );
document.getElementById('nueve')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#nueve')!) );
document.getElementById('cero')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#cero')!) );
document.getElementById('punto')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#punto')!) );
document.getElementById('limpia')!.addEventListener('click', () => accionNumero(document.querySelector<HTMLDivElement>('#limpia')!) );


document.getElementById('suma')!.addEventListener('click', () => accionOperador(document.querySelector<HTMLDivElement>('#suma')!) );
document.getElementById('resta')!.addEventListener('click', () => accionOperador(document.querySelector<HTMLDivElement>('#resta')!) );
document.getElementById('multi')!.addEventListener('click', () => accionOperador(document.querySelector<HTMLDivElement>('#multi')!) );
document.getElementById('divi')!.addEventListener('click', () => accionOperador(document.querySelector<HTMLDivElement>('#divi')!) );

document.getElementById('igual')!.addEventListener('click', () => accionResultado() );

document.getElementById('hitorial')!.addEventListener('click', () => listaHistorial() );