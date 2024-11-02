export function validateDestinosPage() {
    const destinationsList = document.querySelector('.destinations-list');
    if (!destinationsList) throw new Error("Lista de destinos não encontrada na página de Destinos.");
    
    const destinationCards = document.querySelectorAll('.destination-card');
    if (destinationCards.length === 0) console.warn("Nenhum destino encontrado para exibir.");
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        validateDestinosPage();
    } catch (error) {
        console.error("Erro ao validar a página de Destinos:", error);
    }
});
