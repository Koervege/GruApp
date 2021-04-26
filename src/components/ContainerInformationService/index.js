import { buttonValues } from '../../buttonValues';
import { Information, Meter, Paragraph } from './styles';


export default function ContainerInformationService({ servStat, initLoc, finalLoc, hour, date }) {
  return servStat &&(
    <Information>
      <Meter
        id="progress"
        min="0"
        max="100"
        low="25"
        high="60"
        optimum="100"
        value={buttonValues[servStat].value}
      ></Meter>
      <label htmlFor="progress">
        {servStat === 'Inicio' && (
          <strong>
            {buttonValues[servStat].content} {initLoc}
          </strong>
        )}
        {servStat === 'Destino' && (
          <strong>
            {buttonValues[servStat].content} {finalLoc}
          </strong>
        )}
        {servStat !== 'Inicio' && servStat !== 'Destino' && (
          <strong>{buttonValues[servStat].content}</strong>
        )}
      </label>
      {hour && servStat !== 'Aceptado' && (
        <Paragraph>
          El {date} a las {hour}
        </Paragraph>
      )}
      <Paragraph>
        {initLoc} - {finalLoc}
      </Paragraph>
    </Information>
  );
}
