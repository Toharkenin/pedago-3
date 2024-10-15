import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { setupCounter } from './counter.ts'
import { renderHeader } from './view/header/header.ts';
// import { renderDashboard } from './view/dashboard/dashboard.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


