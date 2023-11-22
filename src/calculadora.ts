let respaldo: string = '0';
let operacionNueva: boolean = false;
let operaciones: Operaciones[] = [];
interface Operaciones {
    firtVale: number,
    operador: string,
    operacion?: string;
    secodVal: number,
    resultado: number;
}
function accionNumero(elemento: HTMLDivElement): void {
    let pantalla: HTMLInputElement = (<HTMLInputElement>document.getElementById('pantalla'));
    if (elemento.textContent == 'C') {
        respaldo = '0';
        pantalla.value = '0';
        quitActivosYActivoElemento();
        operaciones = [];
    } else {
        if(pantalla.value == respaldo){
            pantalla.value = '0'; 
        }
        if (operacionNueva){
            pantalla.value = '0';
            operacionNueva = false;
        }
        if (elemento.textContent == '.') {
            if (pantalla.value.indexOf('.') == -1){
                pantalla.value = (pantalla.value == '.' ? '0.' : pantalla.value) + elemento.textContent;
            }
        }else{
            pantalla.value = (pantalla.value == '0' ? '' : pantalla.value) + elemento.textContent;
        }
    }
}
function quitActivosYActivoElemento(elemento?: HTMLDivElement):void {
    let activos: HTMLCollection = document.getElementsByClassName('activo'); 
    if (activos.length != 0){
        for(var i = 0; activos.length; i ++){
            activos[i].classList.remove('activo');
        }
    }
    if(elemento){
        elemento.classList.add('activo');
    }
}
function accionOperador(elemento: HTMLDivElement): void {
    let pantalla: HTMLInputElement = (<HTMLInputElement>document.getElementById('pantalla'));
    if (pantalla.value != '0'){
        quitActivosYActivoElemento(elemento);
        if (operaciones.find((x) => x.secodVal == 0)){
            let ope = operaciones.find((x) => x.secodVal == 0);
            ope!.secodVal = parseFloat(pantalla.value);
            ope!.operacion = `${ope!.firtVale}${ope!.operador}${ope!.secodVal}`;
            ope!.resultado = parseFloat(eval(ope!.operacion.replace('x','*')));
            respaldo = ope!.resultado.toString();
            operacionNueva = false;
        } 
        let ope: Operaciones = {
            firtVale: (parseFloat(respaldo) == 0 ? parseFloat(pantalla.value) : parseFloat(respaldo)), 
            operador: elemento.textContent!,
            secodVal: 0,
            resultado: 0
        }
        operaciones.push(ope);
        pantalla.value = ope.firtVale.toString();
        respaldo = pantalla.value;
    }
}
function accionResultado(): void {
    let pantalla: HTMLInputElement = (<HTMLInputElement>document.getElementById('pantalla'));
    if (pantalla.value != '0'){
        if (operaciones.find((x) => x.secodVal == 0)){
            let ope = operaciones.find((x) => x.secodVal == 0);
            ope!.secodVal = parseFloat(pantalla.value);
            ope!.operacion = `${ope!.firtVale}${ope!.operador}${ope!.secodVal}`;
            ope!.resultado = parseFloat(eval(ope!.operacion.replace('x','*').replace('÷','/')));
            pantalla.value = ope!.resultado.toString(); 
            quitActivosYActivoElemento();
            respaldo = '0';
            operacionNueva = true;
        }
    }
}
function listaHistorial(): void {
    let html = '';
    if(operaciones.length != 0){
        operaciones.forEach((x) => {
            html += `<label>${ x.operacion }=${ x.resultado }</label><br>`;
        });
    }
    quitActivosYActivoElemento();
    document.getElementById('ltsHistorial')!.innerHTML = html;
}
 export { accionNumero, accionOperador, accionResultado, listaHistorial };