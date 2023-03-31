import React from 'react';

function Button() {
  return (
    <>
      <table className="calculator">
        <tbody>
          <tr>
            <td colSpan={4} classID="display">
              <input type="text" id="displayInput" placeholder="0" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="silverColor" type="button" value="Ac" />
            </td>
            <td>
              <input className="silverColor" type="button" value="+/-" />
            </td>
            <td>
              <input className="silverColor" type="button" value="%" />
            </td>
            <td>
              <input className="diffColor" type="button" value="÷" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="silverColor" type="button" value="7" />
            </td>
            <td>
              <input className="silverColor" type="button" value="8" />
            </td>
            <td>
              <input className="silverColor" type="button" value="9" />
            </td>
            <td>
              <input className="diffColor" type="button" value="X" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="silverColor" type="button" value="4" />
            </td>
            <td>
              <input className="silverColor" type="button" value="5" />
            </td>
            <td>
              <input className="silverColor" type="button" value="6" />
            </td>
            <td>
              <input className="diffColor" type="button" value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="silverColor" type="button" value="1" />
            </td>
            <td>
              <input className="silverColor" type="button" value="2" />
            </td>
            <td>
              <input className="silverColor" type="button" value="3" />
            </td>
            <td>
              <input className="diffColor" type="button" value="+" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input className="silverColor" type="button" value="0" />
            </td>
            <td>
              <input className="silverColor" type="button" value="." />
            </td>
            <td>
              <input className="diffColor" type="button" value="=" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Button;
