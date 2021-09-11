import React from 'react';

function Alert({tipo, mensagem}) {
    return (
        <div className={`alert ${tipo}`} role="alert">
            {mensagem}
        </div>
    );
}

export default Alert;