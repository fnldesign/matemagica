import React, { useState } from 'react';
import './CartaMitologica.css';

const carta = [
  {
    numero: 3,
    valor: '3',
    naipe: 'Copas',
    deus: 'Ártemis',
    titulo: 'Precisão e Instinto',
    descricao: 'Deusa da caça e natureza. Representa precisão e intuição.'
  },
  {
    numero: 4,
    valor: '4',
    naipe: 'Copas',
    deus: 'Ártemis',
    titulo: 'Precisão e Instinto',
    descricao: 'Deusa da caça e natureza. Representa precisão e intuição.'
  }
];

export default function CartaMitologica() {
  const [flipped, setFlipped] = useState(false);

  function createAccount() {
    const left = Math.floor(Math.random() * 10) + 1;
    const right = Math.floor(Math.random() * 10) + 1;
    const result_operation = left * right;
    return {
      left,
      right,
      operation: 'x',
      result: result_operation
    };
  }

  const [account, setAccount] = useState(() => createAccount());
  const [right_result, setRightResult] = useState(0);
  const [wrong_result, setWrongResult] = useState(0);

  return (
    <>
    <div className="card-action-buttons responsive-actions">
          {flipped && (
            <button
              className="card-mark-right"
              onClick={() => {
                setFlipped(f => !f);
                setAccount(createAccount());
                setRightResult(r => r + 1);
              }}
            >
               {/*
              <span style={{ marginRight: 6, verticalAlign: 'middle' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10.5L9 14.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              */}
              ✅ Acertei
            </button>
          )}

          {!flipped && (
            <button
              className="card-flip-button"
              onClick={() => setFlipped(f => !f)}
              onMouseOver={e => {
                e.currentTarget.classList.add('card-flip-button-hover');
              }}
              onMouseOut={e => {
                e.currentTarget.classList.remove('card-flip-button-hover');
              }}
            >
              Virar Carta
            </button>
          )}

          {flipped && (
            <button
              className="card-mark-wrong"
              onClick={() => {
                setFlipped(f => !f);
                setAccount(createAccount());
                setWrongResult(w => w + 1);
              }}
            >
              {/*
              <span style={{ marginRight: 6, verticalAlign: 'middle' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              */}
             ❌ Errei
            </button>
          )}
        </div>
      <div className="carta-mitologica-responsive-wrapper">
        <div style={{ marginLeft: 70 }} className="card-results-status responsive-status">
          <span>Corretas: {right_result ?? 0}</span>
          <span style={{ marginLeft: 16 }}>Erradas: {wrong_result ?? 0}</span>
        </div>
        <div className="card-container responsive-card">
          {!flipped && (
            <>
              <div className="corner top-left">
                <div className="card-account">
                  {`${account.left} ${account.operation} ${account.right}`}
                </div>
              </div>
              <div className="corner bottom-right">
                <div className="card-value-bottom">1</div>
                <div className="card-suit-bottom">♦</div>
              </div>
            </>
          )}
          <div>
            <img
              src="/imagens/cards/frente.png"
              alt="Apolo"
              className="card-image"
            />
          </div>
          <div>
            {!flipped ? (
              <img
                src="/imagens/gods/apolo.png"
                alt="Apolo"
                className="card-god"
              />
            ) : (
              <div className="card-account-result">{account.result}</div>
            )}
          </div>
          {!flipped && (
            <div>
              <div className="card-name">APOLO</div>
              <div className="card-title">God of light, music, and knowledge</div>
            </div>
          )}
        </div>

        
        
        
        {/*
        <div className="card-footer responsive-footer">
          <div className="card-footer-text">Desenvolvido por [Seu Nome]</div>
          <div className="card-footer-text">Versão 1.0</div>
          <div className="card-footer-text">Data: 2023-10-01</div>
          <div className="card-footer-text">Contato:  [Seu E-mail]</div>
        </div>    
      */}
      </div>

      
    </>
  );
}
