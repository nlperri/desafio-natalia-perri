export const menu = [
    { code: 'cafe', description: 'Café', value: 'R$ 3,00', isMain: true, isCombo: false },
    { code: 'chantily', description: 'Chantily (extra do Café)', value: 'R$ 1,50', isMain: false, isCombo: false, mainItemCode: 'cafe' },
    { code: 'suco', description: 'Suco Natural', value: 'R$ 6,20', isMain: true, isCombo: false },
    { code: 'sanduiche', description: 'Sanduíche', value: 'R$ 6,50', isMain: true, isCombo: false },
    { code: 'queijo', description: 'Queijo (extra do Sanduíche)', value: 'R$ 2,00', isMain: false, isCombo: false, mainItemCode: 'sanduiche' },
    { code: 'salgado', description: 'Salgado', value: 'R$ 7,25', isMain: true, isCombo: false },
    { code: 'combo1', description: '1 Suco e 1 Sanduíche', value: 'R$ 9,50', isMain: false, isCombo: true },
    { code: 'combo2', description: '1 Café e 1 Sanduíche', value: 'R$ 7,50', isMain: false, isCombo: true }
]