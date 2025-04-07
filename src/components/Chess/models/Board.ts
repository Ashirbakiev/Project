import {Cell} from "./Cell.ts";
import {Colors} from "./Colors.ts";
import {Pawn} from "./figures/Pawn.ts";
import {King} from "./figures/King.ts";
import {Queen} from "./figures/Queen.ts";
import {Bishop} from "./figures/Bishop.ts";
import {Knight} from "./figures/Knight.ts";
import {Rook} from "./figures/Rook.ts";
import {Figure} from "./figures/Figure.ts";
import { FigureNames } from "./figures/Figure.ts";

export class Board {
  cells: Cell[][] = []
  lostBlackFigures: Figure[] = []
  lostWhiteFigures: Figure[] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // Черные ячейки
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // белые
        }
      }
      this.cells.push(row);
    }
  }
  isKingInCheck(color: Colors): boolean {
    const kingCell = this.cells.flat().find(
      (cell) => cell.figure?.name === FigureNames.KING && cell.figure.color === color
    );
  
    if (!kingCell) return false;
  
    // Проверяем, может ли любая фигура противника атаковать короля
    return this.cells.flat().some(
      (cell) => cell.figure && cell.figure.color !== color && cell.figure.canMove(kingCell)
    );
  }
  isCheckmate(color: Colors): boolean {
    if (!this.isKingInCheck(color)) return false; // Если нет шаха, нет мата
  
    const kingCell = this.cells.flat().find(
      (cell) => cell.figure?.name === FigureNames.KING && cell.figure.color === color
    );
  
    if (!kingCell) return false;
  
    // 1. Проверяем, есть ли у короля хоть один ход, который убирает его из-под шаха
    for (const row of this.cells) {
      for (const targetCell of row) {
        if (kingCell.figure?.canMove(targetCell)) {
          // Симулируем ход и проверяем, не останется ли король под шахом
          const oldFigure = targetCell.figure;
          targetCell.figure = kingCell.figure;
          kingCell.figure = null;
          
          const stillInCheck = this.isKingInCheck(color);
  
          // Откатываем ход
          kingCell.figure = targetCell.figure;
          targetCell.figure = oldFigure;
  
          if (!stillInCheck) return false;
        }
      }
    }
  
    // 2. Проверяем, могут ли другие фигуры закрыть короля от атаки
    return !this.cells.flat().some((cell) => {
      if (cell.figure && cell.figure.color === color) {
        return this.cells.flat().some((targetCell) => {
          if (cell.figure?.canMove(targetCell)) {
            // Симулируем ход и проверяем шах
            const oldFigure = targetCell.figure;
            targetCell.figure = cell.figure;
            cell.figure = null;
  
            const stillInCheck = this.isKingInCheck(color);
  
            // Откатываем ход
            cell.figure = targetCell.figure;
            targetCell.figure = oldFigure;
  
            return !stillInCheck;
          }
          return false;
        });
      }
      return false;
    });
  }
  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostWhiteFigures = this.lostWhiteFigures
    newBoard.lostBlackFigures = this.lostBlackFigures
    return newBoard;
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1))
      new Pawn(Colors.WHITE, this.getCell(i, 6))
    }
  }

  private addKings() {
    new King(Colors.BLACK, this.getCell(4, 0))
    new King(Colors.WHITE, this.getCell(4, 7))
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0))
    new Queen(Colors.WHITE, this.getCell(3, 7))
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.BLACK, this.getCell(5, 0))
    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.BLACK, this.getCell(6, 0))
    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))
    new Rook(Colors.WHITE, this.getCell(0, 7))
    new Rook(Colors.WHITE, this.getCell(7, 7))
  }

  // public addFisherFigures() {
  //
  // }

  public addFigures() {
    this.addPawns()
    this.addKnights()
    this.addKings()
    this.addBishops()
    this.addQueens()
    this.addRooks()
  }
}