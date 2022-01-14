import React from 'react'

export function Table({ title, col, row, loading, ...props }) {
    return (
        <div className="table-responsive">
            <table className="table table-striped" {...props} >
                {title
                    ?
                    <thead className="thead-dark">
                        <tr>
                            {title.map((value, index) => (
                                <th scope="col" key={index}>{value}</th>
                            ))}
                        </tr>
                    </thead>
                    : null}
                <tbody>
                    {loading ?
                        <tr>
                            <td colSpan={'100%'}>Please wait...</td>
                        </tr>
                 :
                 row.map((value, index) => (
                    <tr key={index}>
                        {value.map((text, i) => (
                            <td key={i}>{text}</td>
                        ))}
                    </tr>
                ))
                 }
                  
                </tbody>
            </table>
        </div>
    );
}