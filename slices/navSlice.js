import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
    origem: null,
    destino: null,
    tempoDeViagem: null,
}


export const navSlice = createSlice({
    name: 'nav',
    initialState: estadoInicial,
    reducer: {
        definirOrigem: (state, acao) => {
            state.origem = acao.payload;
        },
        definirDestino: (state, acao) => {
            state.destino = acao.payload;
        },
        definirTempoDeViagem: (state, acao) => {
            state.tempoDeViagem = acao.payload;
        },
    }
})


export const {
    definirOrigem,
    definirDestino,
    definirTempoDeViagem
} = navSlice.actions;



export const selecionarOrigem = (state) => state.nav.origem;

export const selecionarDestino = (state) => state.nav.destino;

export const selecionarTempoDeViagem = (state) => state.nav.tempoDeViagem;



export default navSlice.reducer;





