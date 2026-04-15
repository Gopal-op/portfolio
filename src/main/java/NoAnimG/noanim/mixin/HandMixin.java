package NoAnimG.noanim.mixin;

import net.minecraft.client.render.item.HeldItemRenderer;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(HeldItemRenderer.class)
public class HandMixin {

    @Inject(method = "updateHeldItems", at = @At("HEAD"), cancellable = true)
    private void cancelHandAnimations(CallbackInfo ci) {
        ci.cancel();
    }
}