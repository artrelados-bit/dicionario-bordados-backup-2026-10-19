import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const width = 1200;
const height = 850;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <marker id="m-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#000000"/>
    </marker>
    <marker id="m-arr-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 8 1.5 L 0 5 L 8 8.5 z" fill="#000000"/>
    </marker>
  </defs>

  <!-- Fundo 100% Branco Puro (Sem faixas no topo) -->
  <rect width="${width}" height="${height}" fill="#ffffff"/>

  <!-- ================= LADO ESQUERDO: DIAGRAMA DO BASTIDOR ================= -->

  <!-- Aro Externo do Bastidor -->
  <rect x="70" y="80" width="530" height="550" rx="12" fill="none" stroke="#000000" stroke-width="3"/>

  <!-- Linha Limite da Área Útil de Bordado (Tracejada grossa e nítida) -->
  <rect x="135" y="145" width="400" height="420" fill="none" stroke="#000000" stroke-width="2.5" stroke-dasharray="10,6"/>

  <!-- Cota Superior: Largura 110 mm -->
  <line x1="135" y1="115" x2="535" y2="115" stroke="#000000" stroke-width="2.2" marker-start="url(#m-arr-rev)" marker-end="url(#m-arr)"/>
  <line x1="135" y1="95" x2="135" y2="145" stroke="#000000" stroke-width="1.8"/>
  <line x1="535" y1="95" x2="535" y2="145" stroke="#000000" stroke-width="1.8"/>
  <rect x="225" y="98" width="220" height="34" fill="#ffffff"/>
  <text x="335" y="122" font-family="Liberation Sans, Arial, sans-serif" font-size="21" font-weight="900" fill="#000000" text-anchor="middle">LARGURA: 110 mm</text>

  <!-- Cota Lateral: Altura 85 mm -->
  <line x1="100" y1="145" x2="100" y2="565" stroke="#000000" stroke-width="2.2" marker-start="url(#m-arr-rev)" marker-end="url(#m-arr)"/>
  <line x1="80" y1="145" x2="135" y2="145" stroke="#000000" stroke-width="1.8"/>
  <line x1="80" y1="565" x2="135" y2="565" stroke="#000000" stroke-width="1.8"/>
  <rect x="83" y="340" width="34" height="200" fill="#ffffff" transform="rotate(-90 100 355)"/>
  <text x="100" y="362" font-family="Liberation Sans, Arial, sans-serif" font-size="21" font-weight="900" fill="#000000" text-anchor="middle" transform="rotate(-90 100 362)">ALTURA: 85 mm</text>

  <!-- Eixos Cartesianos do Centro -->
  <line x1="135" y1="355" x2="535" y2="355" stroke="#555555" stroke-width="1.8" stroke-dasharray="8,6"/>
  <line x1="335" y1="145" x2="335" y2="565" stroke="#555555" stroke-width="1.8" stroke-dasharray="8,6"/>

  <!-- Ponto Central (0, 0) -->
  <circle cx="335" cy="355" r="18" fill="none" stroke="#000000" stroke-width="2.5"/>
  <line x1="310" y1="355" x2="360" y2="355" stroke="#000000" stroke-width="2.5"/>
  <line x1="335" y1="330" x2="335" y2="380" stroke="#000000" stroke-width="2.5"/>
  <circle cx="335" cy="355" r="4.5" fill="#000000"/>

  <!-- Motivo do Bordado (Flor de Lótus no Traço dos Manuais Singer - Traços Fortes e Visíveis) -->
  <g transform="translate(335, 355) scale(1.35)">
    <!-- Miolo / Botão Central -->
    <path d="M 0 -68 C 16 -44 22 -20 0 10 C -22 -20 -16 -44 0 -68 Z" fill="none" stroke="#000000" stroke-width="3"/>
    <path d="M 0 -58 C 9 -38 12 -20 0 0 C -12 -20 -9 -38 0 -58 Z" fill="none" stroke="#000000" stroke-width="2"/>

    <!-- Pétalas Médias -->
    <path d="M 0 10 C 26 -12 42 -42 32 -66 C 12 -42 6 -16 0 10 Z" fill="none" stroke="#000000" stroke-width="2.8"/>
    <path d="M 0 10 C -26 -12 -42 -42 -32 -66 C -12 -42 -6 -16 0 10 Z" fill="none" stroke="#000000" stroke-width="2.8"/>

    <!-- Pétalas Laterais -->
    <path d="M 0 16 C 44 4 70 -24 64 -50 C 42 -24 22 0 0 16 Z" fill="none" stroke="#000000" stroke-width="2.6"/>
    <path d="M 0 16 C -44 4 -70 -24 -64 -50 C -42 -24 -22 0 0 16 Z" fill="none" stroke="#000000" stroke-width="2.6"/>

    <!-- Pétalas Abertas -->
    <path d="M 0 22 C 64 16 98 -8 92 -30 C 62 -4 32 10 0 22 Z" fill="none" stroke="#000000" stroke-width="2.4"/>
    <path d="M 0 22 C -64 16 -98 -8 -92 -30 C -62 -4 -32 10 0 22 Z" fill="none" stroke="#000000" stroke-width="2.4"/>

    <!-- Base do Cálice -->
    <path d="M -75 28 C -42 38 0 38 0 22 C 0 38 42 38 75 28 C 48 46 0 48 0 38 C 0 48 -48 46 -75 28 Z" fill="none" stroke="#000000" stroke-width="2.8"/>

    <!-- Pistilos -->
    <line x1="0" y1="5" x2="0" y2="-28" stroke="#000000" stroke-width="2"/>
    <circle cx="0" cy="-30" r="3.2" fill="#000000"/>
    <line x1="-9" y1="8" x2="-16" y2="-20" stroke="#000000" stroke-width="2"/>
    <circle cx="-17" cy="-22" r="3.2" fill="#000000"/>
    <line x1="9" y1="8" x2="16" y2="-20" stroke="#000000" stroke-width="2"/>
    <circle cx="17" cy="-22" r="3.2" fill="#000000"/>
  </g>

  <!-- ================= CHAMADAS DIDÁTICAS DO DIAGRAMA (GRANDES E DIRETAS) ================= -->

  <!-- Chamada 1: Limite da Área de Bordado -->
  <line x1="535" y1="165" x2="585" y2="45" stroke="#000000" stroke-width="2"/>
  <line x1="585" y1="45" x2="260" y2="45" stroke="#000000" stroke-width="2"/>
  <text x="250" y="52" font-family="Liberation Sans, Arial, sans-serif" font-size="20" font-weight="900" fill="#000000" text-anchor="end">ÁREA DE BORDADO</text>

  <!-- Chamada 2: Aro do Bastidor -->
  <line x1="600" y1="100" x2="630" y2="100" stroke="#000000" stroke-width="2"/>
  <text x="640" y="106" font-family="Liberation Sans, Arial, sans-serif" font-size="20" font-weight="900" fill="#000000">ARO DO BASTIDOR</text>

  <!-- Chamada 3: Centro (0, 0) -->
  <line x1="335" y1="373" x2="335" y2="690" stroke="#000000" stroke-width="2"/>
  <line x1="335" y1="690" x2="240" y2="690" stroke="#000000" stroke-width="2"/>
  <text x="230" y="697" font-family="Liberation Sans, Arial, sans-serif" font-size="21" font-weight="900" fill="#000000" text-anchor="end">CENTRO DA MATRIZ (0, 0)</text>

  <!-- Chamada 4: Folga de Segurança -->
  <line x1="480" y1="565" x2="480" y2="735" stroke="#000000" stroke-width="2"/>
  <line x1="480" y1="735" x2="240" y2="735" stroke="#000000" stroke-width="2"/>
  <text x="230" y="742" font-family="Liberation Sans, Arial, sans-serif" font-size="20" font-weight="900" fill="#000000" text-anchor="end">FOLGA DE SEGURANÇA</text>

  <!-- ================= LADO DIREITO: FICHA TÉCNICA DO CABEÇALHO ================= -->

  <!-- Caixa de Dados Principal -->
  <rect x="650" y="145" width="490" height="600" rx="8" fill="#ffffff" stroke="#000000" stroke-width="3"/>

  <!-- Título da Caixa -->
  <rect x="650" y="145" width="490" height="55" rx="6" fill="#000000"/>
  <text x="895" y="181" font-family="Liberation Sans, Arial, sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">CABEÇALHO DA MATRIZ</text>

  <!-- Linha: Nome do Arquivo -->
  <text x="680" y="240" font-family="Liberation Sans, Arial, sans-serif" font-size="20" font-weight="900" fill="#000000">ARQUIVO:</text>
  <text x="830" y="240" font-family="Liberation Mono, Courier, monospace" font-size="22" font-weight="900" fill="#000000">FLOR_LIRIO.PES</text>
  <line x1="680" y1="260" x2="1110" y2="260" stroke="#cccccc" stroke-width="1.8"/>

  <!-- Linha: Total de Pontos -->
  <text x="680" y="300" font-family="Liberation Sans, Arial, sans-serif" font-size="20" font-weight="900" fill="#000000">PONTOS:</text>
  <text x="830" y="300" font-family="Liberation Sans, Arial, sans-serif" font-size="22" font-weight="900" fill="#000000">6.432 PONTOS</text>
  <line x1="680" y1="320" x2="1110" y2="320" stroke="#cccccc" stroke-width="1.8"/>

  <!-- Linha: Largura -->
  <text x="680" y="360" font-family="Liberation Sans, Arial, sans-serif" font-size="20" font-weight="900" fill="#000000">LARGURA:</text>
  <text x="830" y="360" font-family="Liberation Sans, Arial, sans-serif" font-size="22" font-weight="900" fill="#000000">110 mm</text>
  <line x1="680" y1="380" x2="1110" y2="380" stroke="#cccccc" stroke-width="1.8"/>

  <!-- Linha: Altura -->
  <text x="680" y="420" font-family="Liberation Sans, Arial, sans-serif" font-size="20" font-weight="900" fill="#000000">ALTURA:</text>
  <text x="830" y="420" font-family="Liberation Sans, Arial, sans-serif" font-size="22" font-weight="900" fill="#000000">85 mm</text>
  <line x1="680" y1="440" x2="1110" y2="440" stroke="#000000" stroke-width="2.5"/>

  <!-- Seção de Cores -->
  <text x="680" y="475" font-family="Liberation Sans, Arial, sans-serif" font-size="19" font-weight="900" fill="#000000">CORES (4 PARADAS):</text>

  <!-- Cor 1 -->
  <rect x="680" y="495" width="24" height="24" rx="4" fill="#15803d" stroke="#000000" stroke-width="1.5"/>
  <text x="715" y="513" font-family="Liberation Sans, Arial, sans-serif" font-size="19" font-weight="bold" fill="#000000">1. VERDE (FOLHAS)</text>

  <!-- Cor 2 -->
  <rect x="680" y="535" width="24" height="24" rx="4" fill="#db2777" stroke="#000000" stroke-width="1.5"/>
  <text x="715" y="553" font-family="Liberation Sans, Arial, sans-serif" font-size="19" font-weight="bold" fill="#000000">2. ROSA (PÉTALAS)</text>

  <!-- Cor 3 -->
  <rect x="680" y="575" width="24" height="24" rx="4" fill="#eab308" stroke="#000000" stroke-width="1.5"/>
  <text x="715" y="593" font-family="Liberation Sans, Arial, sans-serif" font-size="19" font-weight="bold" fill="#000000">3. AMARELO (MIOLO)</text>

  <!-- Cor 4 -->
  <rect x="680" y="615" width="24" height="24" rx="4" fill="#78350f" stroke="#000000" stroke-width="1.5"/>
  <text x="715" y="633" font-family="Liberation Sans, Arial, sans-serif" font-size="19" font-weight="bold" fill="#000000">4. MARROM (CONTORNO)</text>

  <line x1="680" y1="655" x2="1110" y2="655" stroke="#000000" stroke-width="2.5"/>

  <!-- Caixa de Verificação de Segurança da Máquina -->
  <rect x="675" y="670" width="440" height="55" rx="6" fill="#f4f4f5" stroke="#000000" stroke-width="1.8"/>
  <text x="895" y="704" font-family="Liberation Sans, Arial, sans-serif" font-size="19" font-weight="900" fill="#000000" text-anchor="middle">✔ CABEÇALHO APROVADO PELA MÁQUINA</text>

  <!-- Assinatura Inferior Discreta -->
  <text x="600" y="810" font-family="Liberation Sans, Arial, sans-serif" font-size="15" font-weight="bold" fill="#555555" text-anchor="middle">DICIONÁRIO ILUSTRADO DE BORDADO ELETRÔNICO (DIBE) • ATELIÊ ARTRELADOS</text>
</svg>
`;

const resvg = new Resvg(svg, {
  background: '#ffffff',
  fitTo: {
    mode: 'width',
    value: 1600,
  },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

const outPngPath = path.resolve('public/images/c001_cabecalho_metadados_ptbr.png');
fs.writeFileSync(outPngPath, pngBuffer);
console.log('PNG rendered successfully:', outPngPath);
