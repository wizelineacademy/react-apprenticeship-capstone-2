import useDataFetch from "../../hooks/useDataFetch";
import { renderHook } from '@testing-library/react-hooks';

describe('', () => {
  test('', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useDataFetch('2022-01-21') );
    await waitForNextUpdate();
  
    expect(result.current.data.date).toBe('2022-01-21');
  });
  
});
