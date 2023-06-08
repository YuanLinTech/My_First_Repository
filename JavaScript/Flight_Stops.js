function getStops(flights)
{
    let stop = flights.length - 1;
    if (stop === 0)
    {
        return 'Direct';
    }
    else if (stop === 1)
    {
        return '1 stop';
    }
    else 
    {
        return stop + ' stops';
    }
}

const flights = [{ 'origin': 'MEL', 'destination': 'HKG' }, { 'origin': 'HKG', 'destination': 'CAN' }, { 'origin': 'CAN', 'destination': 'PVG' }];
console.log(getStops(flights)); // Output: 2 stops