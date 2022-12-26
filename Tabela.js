    function Tabela({vetor}){
        
        return(
            <table className='table'>
         <thead>
                <tr>
                        <th> Saldo Total:  </th>       
                        <th> Saldo Periodo:  </th>             
                    
                </tr>

                <tr>                    
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Nome</th>  
                    
                </tr>    
                        
        </thead>

                <tbody>   
                            
                {    Object.values(vetor).map((vete , indice)  => (        
                  
                    <tr key={indice}>
                          
                             
                             <td>{vetor.data_transferencia}</td>
                             <td>{vetor.valor}</td>
                             <td>{vetor.tipo}</td>
                    <td>{vetor.nome_operador_transacao}</td>

                    <td></td>

                    </tr>

                        ))     
                    }  

                </tbody>
            </table>
            
        )
    }

    export default Tabela;