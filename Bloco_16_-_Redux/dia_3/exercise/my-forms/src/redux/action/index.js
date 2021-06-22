
export const INPUT = 'INPUT';

export const sendInput = (payload) => ({
    type: INPUT,
    payload: {
        name: payload.nome,
        email: payload.email,
        endereco: payload.endereco
    },
})