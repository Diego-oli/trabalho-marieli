
export function validatePlanejamentoPage() {
    const planningContent = document.querySelector('.planning-content');
    if (!planningContent) throw new Error("Conteúdo de planejamento não encontrado na página de Planejamento.");

    const planningCards = document.querySelectorAll('.planning-card');
    if (planningCards.length === 0) console.warn("Nenhuma dica de planejamento encontrada para exibir.");
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        validatePlanejamentoPage();
    } catch (error) {
        console.error("Erro ao validar a página de Planejamento:", error);
    }
});
