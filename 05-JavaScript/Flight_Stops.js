function getStops(flights)
{
    let stop = flights.length - 1;
    if (stop == 0)
    {
        return 'Direct';
    }
    else if (stop == 1)
    {
        return '1 stop';
    }
    else 
    {
        return stop + ' stops';
    }
}

/*
Readable
Maintainable
Reusable */