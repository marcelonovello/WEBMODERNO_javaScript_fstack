const mongoose = require('mongoose');

// Adicione { useUnifiedTopology: true } para usar o novo mecanismo de descoberta e monitoramento
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser:true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB.';
        console.log('\x1b[41m%\x1b[37m', msg, 'zx1b[0m]');
    });
