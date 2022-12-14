import { useState, FormEvent, ChangeEvent } from 'react';

import { EndTimeInput, Icon } from './styles';
import { changeState, types, useAppContext } from '../../../context';

export default function NavBarForm() {
  const { dispatch } = useAppContext();

  const [startTime, setStartTime] = useState('3 días');
  const [endTime, setEndTime] = useState('');
  const [startTimeTooltipOpen, setStartTimeTooltipOpen] = useState(false);
  const [endTimeTooltipOpen, setEndTimeTooltipOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // clear dropdown default value
    dispatch(
      changeState(types.numOfDaysChanged, { numOfDays: 'Selecciona el periodo' })
    );
    // pass the query params to be able to perform query
    dispatch(changeState(types.startTimeChanged, { startTime }));
    dispatch(changeState(types.endTimeChanged, { endTime }));
    // clear start end input values
    setStartTime('');
    setEndTime('');
  };

  const changeIcon = () => setToggleIcon(!toggleIcon);

  const handleStartTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  return (
    <form className="form-inline my-lg-0" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          id="startTime"
          type={toggleIcon ? 'text' : 'date'}
          value={startTime}
          onChange={handleStartTimeChange}
        />
        <div className="input-group-append mr-sm-2">
          <span className="input-group-text">
            <Icon
              className={`fa fa-${toggleIcon ? 'calendar' : 'pencil'}`}
              tabIndex={0}
              role="button"
              onClick={changeIcon}
              onKeyDown={() => {}}
            />
          </span>
        </div>
      </div>

    </form>
  );
}
