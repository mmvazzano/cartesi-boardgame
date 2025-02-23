import { Client } from '@think-and-dev/cartesi-boardgame/client'; // Still workaround on this
import { TicTacToe } from './Game';
import { CartesiMultiplayer } from '@think-and-dev/cartesi-boardgame/multiplayer';
import { ethers, BrowserProvider } from 'ethers';

// We let the TypesScript compiler that the ethereum object might be available in the window object, as it added by the MetaMask extension
declare global {
  interface Window {
    ethereum?: any;
  }
}

interface State {
  G: {
    cells: Array<string | null>;
  };
  ctx: {
    gameover?: {
      winner?: string;
    };
  };
}

class TicTacToeClient {
  private client: any;
  private rootElement: HTMLElement;

  constructor(
    rootElement: HTMLElement,
    signer: ethers.Signer,
    playerID: string = '0'
  ) {
    this.rootElement = rootElement;
    this.client = Client({
      game: TicTacToe,
      playerID,
      multiplayer: CartesiMultiplayer({
        server: 'http://localhost:8000',
        dappAddress: '0xab7528bb862fB57E8A2BCd567a2e929a0Be56a5e',
        nodeUrl: 'http://localhost:8080',
        signer: signer,
      }),
    });
    this.client.subscribe((state: State) => this.update(state));
    this.client.start();
    this.createBoard();
    this.attachListeners();
  }

  private createBoard() {
    const rows: string[] = [];
    for (let i = 0; i < 3; i++) {
      const cells: string[] = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(`<td class="cell" data-id="${id}"></td>`);
      }
      rows.push(`<tr>${cells.join('')}</tr>`);
    }

    this.rootElement.innerHTML = `
      <table>${rows.join('')}</table>
      <p class="winner"></p>
    `;
  }

  private attachListeners() {
    const handleCellClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const id = parseInt(target.dataset.id!);
      this.client.moves.clickCell(id);
    };

    const cells = this.rootElement.querySelectorAll('.cell');
    cells.forEach((cell) => {
      (cell as HTMLElement).addEventListener('click', handleCellClick);
    });
  }

  private update(state: State) {
    if (state === null) {
      return;
    }
    const cells = this.rootElement.querySelectorAll('.cell');
    cells.forEach((cell) => {
      const cellId = parseInt((cell as HTMLElement).dataset.id!);
      const cellValue = state.G.cells[cellId];
      (cell as HTMLElement).textContent = cellValue !== null ? cellValue : '';
    });

    const messageEl = this.rootElement.querySelector('.winner') as HTMLElement;
    if (messageEl) {
      if (state.ctx.gameover) {
        messageEl.textContent =
          state.ctx.gameover.winner !== undefined
            ? 'Winner: ' + state.ctx.gameover.winner
            : 'Draw!';
      } else {
        messageEl.textContent = '';
      }
    }
  }
}

async function main() {
  const appElement = document.getElementById('app');
  if (!window.ethereum) {
    alert('Please install MetaMask to play this game');
    return;
  }
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const playerID = prompt('Enter player id (0 or 1):');
  if (!playerID || (playerID !== '0' && playerID !== '1')) {
    return;
  }
  if (appElement) {
    const app = new TicTacToeClient(
      appElement as HTMLElement,
      signer,
      playerID
    );
  }
}

main();
