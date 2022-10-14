(async ()=>{
    const database = require ('./db');
    const Ponto = require ('./ponto');
    await database.sync();

    const resultCreate = await Ponto.create({
        dataPonto:'2022/11/10',
        tipo_ponto: 'entrada',
        observacao: 'teste 22'
    })
    
    console.log (resultCreate);

    

    /*try{
        const resultado = await database.sync();
        console.log(resultado);
    }
    catch (error){
        console.log (error);
    }*/
}) ();