import { nanoid } from 'nanoid';

const filterId = nanoid();

export const filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} value={filter} onChange={onChange} />
    </>
  );
};
