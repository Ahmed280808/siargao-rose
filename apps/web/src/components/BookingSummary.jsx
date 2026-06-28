
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Separator } from '@/components/ui/separator.jsx';
import { formatCurrency } from '@/api/EcommerceApi.js';

export default function BookingSummary({ vehicle, variant, pickupDate, returnDate, discounts }) {
  if (!vehicle || !variant) {
    return null;
  }

  const basePrice = variant.sale_price_in_cents || variant.price_in_cents;
  const onlineDiscount = discounts?.online || 0;
  const longTermDiscount = discounts?.longTerm || 0;
  const totalDiscount = onlineDiscount + longTermDiscount;
  const finalPrice = basePrice * (1 - totalDiscount / 100);

  const currencyInfo = variant.currency_info;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-semibold">{vehicle.title}</p>
          <p className="text-sm text-muted-foreground">{variant.title}</p>
        </div>

        {pickupDate && returnDate && (
          <div className="text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pickup date</span>
              <span className="font-medium">{pickupDate}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-muted-foreground">Return date</span>
              <span className="font-medium">{returnDate}</span>
            </div>
          </div>
        )}

        <Separator />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Base price</span>
            <span>{formatCurrency(basePrice, currencyInfo)}</span>
          </div>
          {onlineDiscount > 0 && (
            <div className="flex justify-between text-secondary">
              <span>Online booking discount ({onlineDiscount}%)</span>
              <span>-{formatCurrency(basePrice * (onlineDiscount / 100), currencyInfo)}</span>
            </div>
          )}
          {longTermDiscount > 0 && (
            <div className="flex justify-between text-secondary">
              <span>Long-term rental discount ({longTermDiscount}%)</span>
              <span>-{formatCurrency(basePrice * (longTermDiscount / 100), currencyInfo)}</span>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span className="text-primary">{formatCurrency(finalPrice, currencyInfo)}</span>
        </div>

        {totalDiscount > 0 && (
          <p className="text-sm text-secondary font-medium">
            You save {formatCurrency(basePrice - finalPrice, currencyInfo)} ({totalDiscount}% off)
          </p>
        )}
      </CardContent>
    </Card>
  );
}
